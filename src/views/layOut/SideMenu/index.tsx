import React, { useState, useEffect, useCallback, memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { setOpenkeys, updateOpenKeys } from '@/store/action' // 后期想将这几个东西存在本地，刷新保留，所以放在redux里面
import Modulecss from './index.module.scss'
import { Menu } from 'antd'
import { Link, withRouter, useLocation } from 'react-router-dom'
import _ from 'lodash'
import { UserOutlined } from '@ant-design/icons'
import { RouteConfig } from '@/route'
import './antd.scss'

const { SubMenu } = Menu

interface RootState {
  Menu: string[]
}

function finddefaultOpenKeys(
  menuList: Array<RouteCellObj>,
  pathname: string
): string[] {
  let arr: string[] = []
  const itera = (list: Array<RouteCellObj>, targetPath: string) => {
    for (let i in list) {
      if (list[i].hasOwnProperty('children')) {
        for (let k in list[i].children) {
          if ((list[i].children as any)[k].path === targetPath) {
            arr.unshift(list[i].path)
            // 关键迭代
            itera(menuList, list[i].path)
          } else {
            itera((list[i].children as any), targetPath)
          }
        }
      }
    }
  }
  itera(menuList, pathname)
  return _.uniq(arr)
}

const menuList = RouteConfig

const MemoMenuComponent = memo(function MenuComponent() {
  const openKeys = useSelector((state: RootState) => state.Menu, shallowEqual)
  
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  const [ownDefaultSelectedKeys, setOwnDefaultSelectedKeys] = useState<
    string[]
  >([])
  const [menuKeys, setmenuKeys] = useState<number>(0)

  useEffect(() => {
    setOwnDefaultSelectedKeys([pathname])
    dispatch(updateOpenKeys(finddefaultOpenKeys(menuList, pathname)))
  }, [dispatch, pathname])

  useEffect(() => {
    setmenuKeys((key: number) => key + 1)
  }, [ownDefaultSelectedKeys])

  const handleOpenChange = useCallback(
    (openKeys) => {
      dispatch(setOpenkeys(openKeys))
    },
    [dispatch]
  )

  const renderMenuList = useCallback((RouteConfig) => {
    return RouteConfig.reduce((pre: JSX.Element[], item: RouteCellObj) => {
      if (!item.hidden) {
        if (!_.isEmpty(item.children)) {
          pre.push(
            <SubMenu
              key={item.path}
              title={
                <span>
                  {item.icon ? <UserOutlined type={item.icon} /> : null}
                  <span>{item.name}</span>
                </span>
              }
            >
              {renderMenuList(item.children)}
            </SubMenu>
          )
        } else {
          pre.push(
            <Menu.Item key={item.path}>
              <Link to={item.path}>
                {item.icon ? <UserOutlined type={item.icon} /> : null}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        }
      }
      return pre
    }, [])
  }, [])

  return (
    <div className={Modulecss.menuWrapper}>
      <Menu
        key={menuKeys}
        onOpenChange={handleOpenChange}
        theme='dark'
        mode='inline'
        defaultSelectedKeys={ownDefaultSelectedKeys}
        defaultOpenKeys={openKeys}
      >
        {renderMenuList(RouteConfig)}
      </Menu>
    </div>
  )
})

export default withRouter(MemoMenuComponent)

import { useState } from 'react'

const useModal = () => {
  const [modalTitleName, setModalTitleName] = useState<string>('新增')
  const [modalvisible, setModalVisible] = useState<boolean>(false)
  return [
    {
      modalTitleName,
      modalvisible
    },
    {
      setModalTitleName,
      setModalVisible
    }
  ]
}

export default useModal

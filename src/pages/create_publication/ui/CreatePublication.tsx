'use client'
import {Button, Card, Modal} from '@/shared/ui'
import { useState } from 'react'
import s from './CreatePublication.module.scss'
import {Image} from "@/shared/ui/icons";

type Props = {
  title: string
  className: string
}

export function CreatePublication({ title, className }: Props) {
  const [isShowModal, setShowModal] = useState<boolean>(true)

  const toggleModal = () => setShowModal(prev => !prev)

  return (
    <>
      <Button onClick={toggleModal} variant={'text'} className={className}>{title}</Button>
        <Modal open={isShowModal} title={'Add Photo'} onClose={toggleModal}>
            <div className={s.modal}>
                <Card className={s.card} >
                    <Image width={48} height={48}/>
                </Card>
                <Button className={s.select}>Select from Computer</Button>
                <Button variant={"outlined"}>Open Draft</Button>
            </div>
        </Modal>
    </>
  )
}
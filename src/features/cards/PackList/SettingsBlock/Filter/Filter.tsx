import React from 'react'
import s from '../SettingsBlock.module.scss'
import Button from '@mui/material/Button'
import {useAppDispatch, useAppSelector} from '../../../../../app/store'

type FilterPropsType = {
    setFilterPack:(user_id:string, pageCount:number)=>void
}
export const Filter: React.FC<FilterPropsType> = ({ setFilterPack }) => {
    const dispatch = useAppDispatch()
    const myId = useAppSelector((state) => state.auth.user._id)
    const user_id = useAppSelector((state) => state.setting.user_id)

    const [disableButton, setDisableButton] = React.useState<boolean[]>([false, true])

    const showMyPackHandler = () => {

        setFilterPack(myId,8)
        setDisableButton([true, false])
    }

    const showAllPackHandler = () => {
        setFilterPack("",8)
        setDisableButton([false, true])
    }
    return (
        <div className={s.settingButton}>
            <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                disabled={disableButton[0]}
                style={{ width: '100px' }}
                onClick={showMyPackHandler}
            >
                My
            </Button>

            <Button
                type={'submit'}
                variant={'contained'}
                color={'primary'}
                disabled={disableButton[1]}
                style={{ width: '100px' }}
                onClick={showAllPackHandler}
            >
                All
            </Button>
        </div>
    )
}

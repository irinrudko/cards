import React from 'react'
import s from './SettingsBlock.module.scss'
import {Search} from '../../../../common/components/Search/Search'
import {SliderBlock} from './SliderBlock/SliderBlock'
import {Filter} from './Filter/Filter'
import {GetPackParams} from "../../../../api/packsAPI";



type SettingsPropsType = {

    searchPack:(searchPack:string)=>void
    setFilterPack:(user_id:string, pageCount:number)=>void
    resetPackListFilter:(data:GetPackParams)=>void
    filterWithSlider:(value:GetPackParams)=>void

}

export const SettingsBlock: React.FC<SettingsPropsType> = ({searchPack,setFilterPack,resetPackListFilter,filterWithSlider }) => {
    return (
        <div className={s.settingsBlock}>
            <div className={s.descriptionBlock}>
                <span>Search</span>
                <span className={s.second}>Show packs cards</span>
                <span className={s.third}>Number of cards</span>
            </div>
            <Search searchPack={searchPack} />
            <Filter setFilterPack={setFilterPack} />
            <SliderBlock filterWithSlider={filterWithSlider} resetPackListFilter={resetPackListFilter} />
        </div>
    )
}

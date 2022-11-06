import React, {useState} from 'react'

import { TabMenu } from 'primereact/tabmenu';

import { MenuTypes } from 'types';
import SingleSurvey from 'SingleSurvey';
import AllSurveys from 'AllSurveys';
import { Card } from 'primereact/card';

const menuItems = [{label: MenuTypes.PODSUMOWANIE_ODPOWIEDZI, icon: 'pi pi-fw pi-folder'}, {label: MenuTypes.POJEDYNCZE_ANKIETY, icon: 'pi pi-fw pi-file'}]

const ResultsWrapper = () => {
const [activeIndex, setActiveIndex] = useState(0)

const renderMenu = () => {
    const currentMenuItem = menuItems[activeIndex].label
    if(currentMenuItem === MenuTypes.PODSUMOWANIE_ODPOWIEDZI) { return <AllSurveys />}
    if(currentMenuItem === MenuTypes.POJEDYNCZE_ANKIETY) { return <SingleSurvey />}
}
    return ( 
        <Card style={{width: 800, margin: '50px auto'}}>

    <div className='flex flex-column align-items-center w-full p-5 mx-auto'>
        <h1>Ankieta przedszkoleniowa:</h1>
        <h1>TYPESCRIPT</h1>
        <div>
        <TabMenu activeIndex={activeIndex}  model={menuItems} onTabChange={(e) => setActiveIndex(e.index)} />
        {renderMenu()}
        </div>
    </div> 
        </Card>
    );
}
 
export default ResultsWrapper;
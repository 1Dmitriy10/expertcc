/*
cтруктура
<div class="_tabs-js">
        <div class="tabs__title-box">
            <span class="tabs__title">первая вкладка</span>
            <span class="tabs__title">вторая вкладка</span>
            <span class="tabs__title">третья вкладка</span>
        </div>
        <div class="tabs__item-box">
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
            <div class="tabs__item">
            </div>
        </div>
    </div>
*/

import {Tabs} from "../vendor.js"


let tabs = new Tabs({class: "business-tabs"})

let achievementsTabs = new Tabs({class: "about-achievements__tabs"})

let historyTabs = new Tabs({class: "history_tabs"})

let mainPreviewBusinessPlanTabs = new Tabs({class: "main-preview-business-plan_tabs"})



import { api, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class DragAndDropCard extends NavigationMixin(LightningElement) {
    @api stage;
    @api record;

    get isSameStage(){
       return this.stage === this.record.StageName
    }
    navigateOppHandler(event){
        event.preventDefault();
        this.navigationHandler( event.target.dataset.id,'Opportunity')
    }
    navigateAccHandler(event){
        event.preventDefault();
        this.navigationHandler( event.target.dataset.id,'Account')

    }
    navigationHandler(id,objApiName){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes:{
                recordId : id,
                ObjectApiName : objApiName,
                actionName : 'view',

            }
        })
    }
    itemDragStart(){
        const event = new CustomEvent('itemdrag',{
            detail: this.record.Id
        })
        this.dispatchEvent(event)
    }
}
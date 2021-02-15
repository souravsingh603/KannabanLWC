import { LightningElement,api } from 'lwc';

export default class DragAndDropList extends LightningElement {
    @api records;
    @api stage;

    handleItemDrag(ev){
        const event = new CustomEvent('listitemdrag',{
            detail: ev.detail
        })
        this.dispatchEvent(event)
    }
    handleDrop(evt){
        const event = new CustomEvent('itemdrop',{
            detail : this.stage
        })
        this.dispatchEvent(event)
    }
    handleDragOver(evt){
        evt.preventDefault()
    }
}
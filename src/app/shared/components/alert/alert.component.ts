import { Component, Input, Output,EventEmitter } from '@angular/core';
import { IalertInput } from '../../interfaces/alertInput.interface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent{

  constructor() { }

  /**
   * Description: alert input
   */
  @Input() public alertInput:IalertInput;

  /**
   * Description: emits the user action to the parent
   */
  @Output() public alertOutput : EventEmitter<object> = new EventEmitter();

  /**
   * Description: emits the user action to parent
   * @param:status - user action
   */
  public setValue(status){
    this.alertOutput.emit({
      statusValue:this.alertInput.status,
      orderId:this.alertInput.orderId,
      status:status
    });
  }

}

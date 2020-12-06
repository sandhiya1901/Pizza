import { Injectable } from '@angular/core';
declare var $;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  /**
   * Description: shows loader
   */
  public showLoader(status){
    status ? $('.loader').show() : $('.loader').hide();
  }
}

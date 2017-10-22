import * as React from 'react';
import {observable} from 'mobx';

class ListObject {
  @observable id:number;
  @observable name:string;
}

export class AppStore {
  @observable timer:number = 0;
  @observable list:Array<ListObject> = [];

  constructor() {
      setInterval(() => {
          this.timer += 1;
      }, 1000);
  }

  resetTimer() {
      this.timer = 0;
  }

  addObject(obj:ListObject) {
    this.list.push(obj);
  }
}
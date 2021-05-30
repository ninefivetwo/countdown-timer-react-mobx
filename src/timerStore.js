import { makeAutoObservable } from "mobx";
import React from "react";

class TimerStore {
  constructor() {
    makeAutoObservable(this);
  }
}

const store = new TimerStore();

export default React.createContext(store);

import { action, makeObservable, observable } from 'mobx';

export default class AuthStore {
  @observable isLogin = false;
  @observable accessToken?: string;

  constructor() {
    makeObservable(this);
  }

  @action setIsLogin = (value: boolean) => {
    this.isLogin = value;
  };

  @action setAccessToken = (value: string) => {
    this.accessToken = value;
  };
}

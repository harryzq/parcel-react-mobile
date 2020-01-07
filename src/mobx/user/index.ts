import { action, computed, observable } from "mobx";
interface UserStore {
  info: {
    name: string;
  };
}

class UserStore {
  @observable 
  public info = { name: "mobx" };

  @action
  public setInfo = (data: string) => {
    this.info = {
      ...this.info,
      name: data
    };
  };
}
const userStore = new UserStore();
export default userStore;
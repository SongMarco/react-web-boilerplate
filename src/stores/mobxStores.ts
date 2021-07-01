import React from 'react';
import AuthStore from './authStore';

export const stores = {
  authStore: new AuthStore(),

};

export const storesContext = React.createContext({
  ...stores,
});

export const useStores = () => {
  const store = React.useContext(storesContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};

// class RootStore {
//   adminStore: AdminStore
//   appStore: AppStore
//   themeStore: ThemeStore
//   contentsFilterStore: ContentsFilterStore
//   commentStore: CommentStore
//   contentQuestionStore: ContentQuestionStore
//   answerStore: AnswerStore
//
//   constructor() {
//     this.adminStore = new AdminStore()
//     this.appStore = new AppStore()
//     this.themeStore = new ThemeStore()
//     this.contentsFilterStore = new ContentsFilterStore()
//     this.commentStore = new CommentStore()
//     this.contentQuestionStore = new ContentQuestionStore()
//     this.answerStore = new AnswerStore()
//   }
// }
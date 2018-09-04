// Jest test spec <Hello>

import Vue from 'vue';
import Hello from '@/page/Hello';
// Hello.vue를 $mount시켰다는건 구동을 시킨것, .hello h1의 텍스트가 'Welcome to Hanu Vue Template'이길 기대한다.
describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Hanu Vue Template');
  });
});

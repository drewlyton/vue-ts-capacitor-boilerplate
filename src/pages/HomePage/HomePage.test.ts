import HomePage from './HomePage.vue';
import { render } from '@testing-library/vue'


describe('HomePage', () => {
  it('Should render', () => {
    const { getByText } = render(HomePage)
    expect(getByText('Home Page')).toBeTruthy();
  });
});

import get from './getElement.js';

const loading = get('.loading');

export const hideLoading = () => {
  loading.classList.add('hide-loading');
};

export const showLoading = () => {
  loading.classList.remove('hide-loading');
};

export const fetchTreez = () => (
  $.ajax({
    method: 'GET',
    url: 'https://api.treez.io/v1.0/dispensary/goe/menu/product_list?type=all&offset=0&limit=600'
  })
);

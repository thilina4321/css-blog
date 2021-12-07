const allData = [
  {
    id: 1,
    name: "Scroll to top",
    code: `function scrollToTop(){
      
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }`,
  },
];

export const getAllData = () => {
  return allData;
};

export const getFilteredData = (name) => {
  const filteredData = allData.filter((data) => {
    const dataName = data.name.trim();

    return dataName.toLowerCase().includes(name.toLowerCase().trim());
  });
  return filteredData;
};

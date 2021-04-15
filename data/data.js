const allData = [
  {
    name: "Media Query",
    codeImage: "/images/media-query.PNG",
    description: "Media query for small screens (480px or less)",
  },
  {
    name: "Image Fit",
    codeImage: "/images/image-fit.PNG",
    description: "How to fit image in to a any size user define",
  },
];

export const getAllData = () => {
  return allData;
};

export const getFilteredData = (name) => {
  
  const filteredData = allData.filter(data => {
    const dataName = data.name.trim()
    
    return dataName.toLowerCase().includes(name.toLowerCase().trim())
  } )
  return filteredData;
};

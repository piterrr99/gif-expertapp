export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=x3XCR4RuNpjl1W745XBNYi58jwImhHUl`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    // console.log(data);
    const gifs = data.map(img=>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });        
    
    console.log(gifs)
    return gifs;
};
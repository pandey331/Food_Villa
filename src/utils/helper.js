export function filteredRestaurants(SerachText,actualData){

    const data = actualData.filter((restaurant) =>{

        console.log(restaurant);

        return restaurant?.info?.name.toLowerCase().includes(SerachText.toLowerCase());

    });

    return data;
}
const WithDiscountLabel = (RestaurantCard) => {
  function newComponent({ resDetails }) {
    return (
      <div>
        <label>Discount Available</label>
        <RestaurantCard resDetails={resDetails} />
      </div>
    );
  }

  return newComponent;
};

export default WithDiscountLabel;

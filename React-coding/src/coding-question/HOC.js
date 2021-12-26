/* import React, { Component } from "react";
const higherOrderComponent = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  }
  return HOC;
};
export default higherOrderComponent; */

// thw above is the basics of HOC format,
// we cannot use HOC in render method because reconcilition
//checks any changes in the subtree, so for that it rerender at each time
// as HOC is a Higher and takes one component and return new component

// example of search bar

import products from "./products";
const ProductCard = (props) => {
  return (
    <div className="product">
      <p>
        <b>Title:</b> {props.title}
      </p>
      <p>
        <b>Style:</b> {props.style}
      </p>
      <p>
        <b>Price:</b> {props.price}
      </p>
      <p>
        <b>Description:</b> {props.description}
      </p>
      <p>
        <b>Free shipping:</b> {props.isFreeShipping}
      </p>
      <hr />
    </div>
  );
};

// ProductList Items
const ProductListItems = (props) => {
  let { data: products } = props;
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
};

// ProductListWithSearch bar 
class ProductsListWithSearch extends React.Component  {
   state={ searchitem = ""}
    handleSearch = event => {
        this.setState({searchitem: event.target.value})
    }
    render () 
    {
    const {searchitem} = this.state; 
    let filterProducts = filterProducts(searchitem);
    return (
        <>   
        <input value={searchitem}  onChange = {this.handleSearch} type="text"/>
        <ProductListItems products={filterProducts} />
        </>
        )
    }
  
}  const filterProducts = searchitem => {
    return products.filter((product) => {
        let str = `${product.title} ${product.sku}  ${product.description} ${product.price} ${style}`;
        return str.indexOf(searchitem)
    })
};


// Finally Converting our ProductsListWithSearch into HOC 

const withSearch = Wrappedcomponent => {
    class WithSearch extends React.Component {
        state={
            searchitem=""
        }
        handleSearch= event =>{
this.setState({searchitem: event.target.value})
        }
        render(){
            let {searchitem} = this.state;
            let filterProducts = filterProducts(searchitem);
            return(
            <>
             <input value={searchitem}  onChange = {this.handleSearch} type="text"/>
            <Wrappedcomponent data = {filterProducts } /> 
            </>
            )
        }
    }
    WithSearch.displayName = `Withsearch ${getDisplayName(Wrappedcomponent)}`
    return WithSearch;
}
const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  // Render out products list with search feature
const ProductsListWithSearch = withSearch(ProductsList);

function App() {
  return (
    <div className="App">
      <ProductsListWithSearch />
    </div>
  );
}
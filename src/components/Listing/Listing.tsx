import DATA from "../../data";

interface IListingProps {
  items: typeof DATA,
}

function getClassName(quantity: number) {
  if (quantity <= 10) {
    return 'level-low';
  } else if (quantity <= 20) {
    return 'level-medium';
  } else {
    return 'level-high';
  }
}

export default function Listing(props: IListingProps) {
  const {items = []} = props;

  return (
    <div className="item-list">
      {items && items.map((item) => {
        return (
          <div
            className="item"
            key={item.listing_id}
          >
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title}</p>
              {item.currency_code && ['USD', 'EUR'].includes(item.currency_code) ?
              (
                <p className="item-price">{item.currency_code === 'USD' ? '$' : '€'}{item.price}</p>
              ) : (
                <p className="item-price">{item.price} {item.currency_code}</p>
              )
              }
              
              <p className={`item-quantity ${getClassName(item.quantity as number)}`}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

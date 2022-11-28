import useVerified from '../../Hooks/useVerified/useVerified';
import verifiedIcon from '../../assest/verified.png';
import toast from 'react-hot-toast';

const ProductsCard = ({ product, setBooking }) => {
    const [isVerified] = useVerified(product?.sellerEmail);

    const handleWishlist = id => {
        fetch(`http://localhost:5000/wishlists/${id}`)
        .then(res => res.json())
        .then(data => addToDb(data))
    }

    const addToDb = (data) => {
        fetch('http://localhost:5000/wishlists', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Product Successfully Added to wishlist');
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-96 h-96' src={product.productImage} alt="Movie" /></figure>
            <div className="card-body">
                <div className='flex'>
                    <h2 className="card-title">{product.sellerName}</h2>
                    {
                        isVerified &&
                        <img className='w-[38px] ml-2' src={verifiedIcon} alt="" />
                    }
                </div>
                <h3 className="text-xl">Name: <strong>{product.productName}</strong></h3>
                <h3 className="text-lg">Price: <strong>{product.productPrice}</strong>TK.</h3>
                <h3 className="text-lg">Original Price: <strong>{product.originalPrice}</strong>TK.</h3>
                <h3 className="text-sm">Used: <strong>{product.durationOfUse}</strong></h3>
                <h3 className="text-sm">Location: <strong>{product.location}</strong></h3>
                <h3 className="text-sm">Contact: <strong>{product.mobileNumber}</strong></h3>
                <h3 className="text-sm">Posted: <strong>{product.publishedDate}</strong></h3>
                <div className="card-actions justify-end">
                    <div className='flex flex-col lg:flex-row'>
                        <label onClick={() => setBooking(product)} htmlFor="booking-modal" className="btn bg-orange-600 mr-2 text-white hover:bg-orange-700 border-none mt-3">Book Now</label>
                        <button onClick={() => handleWishlist(product._id)} className="btn bg-orange-600 text-white hover:bg-orange-700 border-none mt-3">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
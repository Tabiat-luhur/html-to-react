import "./konten.css";
import {PhoneAndroid} from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Konten() {
  return (
    <div className="konten">
        <div className="kontenWrapper">
            <div className="top">
                <h2 className="judulPages">
                Daftar Produk
                </h2>
                <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ea voluptate architecto exercitationem, explicabo soluta est reiciendis consequatur similique molestiae!</p>
            </div>
            <br />
            <div className="buttom">
                <ul className="products">
                    <li className="productItem">
                        <h2>Product 1</h2>
                        <PhoneAndroid className="productIcon" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam vero cupiditate eveniet rem quod corporis sint quae, accusamus et</p>
                    </li>
                    <li className="productItem">
                        <h2>Product 2</h2>
                        <PhoneAndroid className="productIcon"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam vero cupiditate eveniet rem quod corporis sint quae, accusamus et</p>
                    </li>
                    <li className="productItem">
                        <h2>Product 3</h2>
                        <PhoneAndroid className="productIcon"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam vero cupiditate eveniet rem quod corporis sint quae, accusamus et</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   
  )
}

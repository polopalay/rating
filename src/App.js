import React, {useState} from "react";
import Swal from 'sweetalert2';
import './App.css';
import quantity1 from './img/quantity1.png';
import quantity2 from './img/quantity2.png';
import quantity3 from './img/quantity3.png';
import quantity4 from './img/quantity4.png';
import quantity5 from './img/quantity5.png';

function App() {
  const [transacions, setTransactions] = useState([
    {chose: false, text: 1},
    {chose: false, text: 2},
    {chose: false, text: 3},
    {chose: false, text: 4},
    {chose: false, text: 5}
  ]);
  const [quantities, setQuantities] = useState([
    {chose: false, text: "Rất tốt", img: quantity1},
    {chose: false, text: "Tốt", img: quantity2},
    {chose: false, text: "Khá", img: quantity3},
    {chose: false, text: "Trung bình", img: quantity4},
    {chose: false, text: "Kém", img: quantity5}
  ]);
  const [improves, setImproves] = useState([
    {text: "Hình thức, trang phục", chose: false},
    {text: "Ý thức, thái độ", chose: false},
    {text: "Chuyên môn nghiệp vụ", chose: false}
  ]);
  const [other, setOther] = useState("");
  const changeTransation = (event) => {
    const text = event.target.innerText
    const list = transacions.map(item => {
      if (item.text == text) {
        item.chose = true;
      } else {
        item.chose = false;
      }
      return item;
    });
    setTransactions(list);
  }
  const changeQuantity = (event) => {
    const text = event.target.getAttribute('val')
    const list = quantities.map(item => {
      console.log(item.text == text)
      if (item.text == text) {
        item.chose = true;
      } else {
        item.chose = false;
      }
      return item;
    });
    setQuantities(list);
  }
  const changeImprove = (event) => {
    const text = event.target.innerText
    const list = improves.map(item => {
      if (item.text == text) {
        item.chose = !item.chose;
      } return item;
    });
    setImproves(list);
  }
  const submit = () => {
    const transacion = transacions.find(item => item.chose);
    const quantity = quantities.find(item => item.chose);
    if (transacion == null || quantity == null) {
      Swal.fire({
        title: 'Lỗi!',
        text: 'Xin mời Quý khách chọn đủ thông tin 2 mục đánh dấu (*)',
        icon: 'error',
        confirmButtonText: 'Điền lại'
      })
    } else {
      Swal.fire({
        title: 'Thành công!',
        text: 'Cám ơn thông tin góp ý của quý khách',
        icon: 'success',
      }).then(() => window.location.reload(false))
    }
  }
  return (
    <div className="form-container container mt-4 d-flex flex-column">
      <h4 className="text-center text-danger">ĐÁNH GIÁ CHẤT LƯỢNG PHỤC VỤ KHÁCH HÀNG</h4>
      <div className="d-flex justify-content-between mt-4">
        <h5 className="text-start">
          <input type="checkbox" className="form-check-input" checked={transacions.filter(item => item.chose == true).length > 0} disabled />
          <i> Xin chọn quầy giao dịch </i>
          <span className="required">(*)</span>:
        </h5>
        <div className="d-flex justify-content-between btn-container">
          {transacions.map((item) =>
            <button type="button" className={`btn ${item.chose ? "btn-primary" : "btn-warning"} border border-2 border-primary rounded-circle shop-btn`} onClick={changeTransation}>{item.text}</button>
          )}
        </div>
      </div>
      <div className="d-flex flex-column mt-4">
        <h5 className="text-start">
          <input type="checkbox" class="form-check-input" checked={quantities.filter(item => item.chose == true).length > 0} disabled />
          <i> Đánh giá chất lượng phục vụ khách hàng </i>
          <span className="required">(*)</span>:
        </h5>
        <div className="d-flex justify-content-between">
          {
            quantities.map((item) =>
              <div className={`d-flex flex-column quantity-container`} val={item.text} onClick={changeQuantity}>
                <button type="button" class={`btn ${item.chose ? "btn-primary" : "btn-warning"} rate-btn`} val={item.text}>{item.text}</button>
                <img className="img-thumbnail border-0 rate-img" src={item.img} val={item.text} />
              </div>
            )}
        </div>
      </div>
      <div className="d-flex flex-column mt-4">
        <h5 className="text-start">
          <input type="checkbox" className="form-check-input" checked={improves.filter(item => item.chose == true).length > 0} disabled />
          <i> Theo Quý khách, Bưu điện cần quan tâm cải tiến nội dung nào để chất lượng phục vụ của Giao dịch viên  đáp ứng được yêu cầu</i>:
        </h5>
        <div className="d-flex justify-content-between">
          {improves.map((item =>
            <button type="button" className={`btn ${item.chose ? "btn-primary" : "btn-warning"} rate-quan-btn`} onClick={changeImprove}>{item.text}</button>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <h5 className="col-sm-12">
          <input type="checkbox" className="form-check-input" checked={other != ""} disabled />
          <i> Ý kiến khác:</i>
        </h5>
        <div className="col-sm-12">
          <textarea className="form-control" onChange={event => setOther(event.target.value)}></textarea>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="btn btn-primary" onClick={submit}>GỬI ĐÁNH GIÁ</button>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <h4 className="text-danger" id="noti">XIN TRÂN TRỌNG CÁM ƠN QUÝ KHÁCH!</h4>
      </div>
    </div>
  );
}

export default App;

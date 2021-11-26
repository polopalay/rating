import './App.css';

function App() {
  return (
    <div className="form-container container mt-4 d-flex flex-column">
      <h4 class="text-center text-danger">ĐÁNH GIÁ CHẤT LƯỢNG PHỤC VỤ KHÁCH HÀNG</h4>
      <div className="d-flex justify-content-between mt-4">
        <h5 className="text-start">Xin chọn quầy giao dịch <span className="required">(*)</span>:</h5>
        <div className="d-flex justify-content-between btn-container">
          <button type="button" class="btn btn-warning border border-2 border-primary rounded-circle shop-btn">1</button>
          <button type="button" class="btn btn-warning border border-2 border-primary rounded-circle shop-btn">2</button>
          <button type="button" class="btn btn-warning border border-2 border-primary rounded-circle shop-btn">3</button>
          <button type="button" class="btn btn-warning border border-2 border-primary rounded-circle shop-btn">4</button>
          <button type="button" class="btn btn-warning border border-2 border-primary rounded-circle shop-btn">5</button>
        </div>
      </div>
      <div className="d-flex flex-column mt-4">
        <h5 className="text-start">Đánh giá chất lượng phục vụ khách hàng <span className="required">(*)</span>:</h5>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column quantity-container">
            <button type="button" class="btn btn-primary rate-btn">Rất Tốt</button>
            <img className="img-thumbnail border-0" src="img/quantity1.png" />
          </div>
          <div className="d-flex flex-column quantity-container">
            <button type="button" class="btn btn-primary rate-btn">Tốt</button>
            <img className="img-thumbnail border-0" src="img/quantity2.png" />
          </div>
          <div className="d-flex flex-column quantity-container">
            <button type="button" class="btn btn-primary rate-btn">Khá</button>
            <img className="img-thumbnail border-0" src="img/quantity3.png" />
          </div>
          <div className="d-flex flex-column quantity-container">
            <button type="button" class="btn btn-primary rate-btn">Trung bình</button>
            <img className="img-thumbnail border-0" src="img/quantity4.png" />
          </div>
          <div className="d-flex flex-column quantity-container">
            <button type="button" class="btn btn-primary rate-btn">Kém</button>
            <img className="img-thumbnail border-0" src="img/quantity5.png" />
          </div>
        </div>
      </div>
      <div className="d-flex flex-column mt-4">
        <h5 className="text-start">Theo Quý khách, Bưu điện cần quan tâm cải tiến nội dung nào để chất lượng phục vụ của Giao dịch viên  đáp ứng được yêu cầu:</h5>
        <div className="d-flex justify-content-between">
          <button type="button" class="btn btn-warning">Hình thức, trang phục</button>
          <button type="button" class="btn btn-warning">Ý thức, thái độ</button>
          <button type="button" class="btn btn-warning">Chuyên môn nghiệp vụ</button>
        </div>
      </div>
      <div class="row mt-4">
        <h5 className="col-sm-3">Ý kiến khác:</h5>
        <div class="col-sm-9">
          <input type="text" class="form-control bg-light" />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <button type="button" class="btn btn-primary">GỬI ĐÁNH GIÁ</button>
      </div>
    </div>
  );
}

export default App;

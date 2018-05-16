import React, { Component } from 'react'
import NavBarJustNow from '../components/NavBarJustNow';
import Footer from '../components/Footer';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
class UpList extends Component {
    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    render() {
        const { selectedOption } = this.state;
        return (
            <div className="home">
                <NavBarJustNow />
                <div className="center-uplist">
                    {/* <Suggestion/> */}

                    <div className="body-top-uplist">
                        {/* Top */}
                        <div className="topList">
                            <center><span style={{ fontSize: '30px' }}>Các điều bị cấm</span></center>
                            <div className="rule">
                                <div className="alert alert-danger">
                                    <strong><i className="fas fa-exclamation-triangle"></i>1 - Nghiêm cấm !</strong> Tuyệt đối không post / ghi các title khiếm nhã , tục tĩu , kích động thù địch

                                </div>
                                <div className="alert alert-success">
                                    <strong><i className="fas fa-check"></i> 2 -</strong> Không có hai chỉ có một thôi , đấy có thế thôi  , bạn lăn chuột xuống dưới để up phim :D  , chúc các bạn vẻ , có một ngày vui ^_^

                                </div>
                                <a href="#top"><center><i class="fas fa-arrow-circle-down" style={{ fontSize: '40px' }} ></i></center></a>
                            </div>
                        </div>

                    </div>

                    <div className="body-top-uplist" id="top">
                        {/* Top */}
                        <div className="topList">
                            <center><span style={{ fontSize: '30px' }}>Nói nhỏ chút</span></center>
                            <div className="rule">
                                <div className="alert alert-info">
                                    <strong><i className="fas fa-volume-up"></i> Hey !</strong> Đừng quá bận tâm khi bạn biết quá nhiều bộ phim hay nên không biết phải chọn cái nào , bạn có thể up nhiều lầm mà >_^ , cảm ơn bạn nhiều !!
                                </div>
                                <div className="alert alert-warning">
                                    <strong><i className="far fa-frown"></i></strong> Dù đã cố gắng nhưng đội ngũ
                                     admin chắc chẵn không thể tìm tất cả các phim , cho nên nếu bạn có một bộ phim
                                      quá độc và đỉnh mà không có trong list phim thì hãy email cho page với địa chỉ nằm <a style={{ cursor: 'pointer' }}> ở đây </a> để bọn mình thêm vào
                                      TRONG VÒNG MỘT NỐT NHẠC , cảm ơn về sự nhiệt tình của bạn <i className="far fa-heart"></i>
                                </div>
                                <a href="#top_2"><center><i class="fas fa-arrow-circle-down" style={{ fontSize: '40px' }} ></i></center></a>

                            </div>
                        </div>
                    </div>
                    <div className="body-top-uplist" id="top_2">
                        {/* Top */}
                        <div className="topList">
                        <center><span style={{ fontSize: '30px' }}>Up Phim </span></center>
                        </div>
                        <div className="rule">
                            <Select
                                name="form-field-name"
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={[
                                    { value: 'one', label: 'One' },
                                    { value: 'two', label: 'Two' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )

    }
}
export default UpList;
import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handlerValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value); 
  }

  function handlerSubmit(e) {
      // prevent reloading browser
    e.preventDefault(); // tránh trình duyệt reload lại
    if(!onSubmit) return;

    const formValue = {
        title: value,
    };
    onSubmit(formValue);

    // reset form sau khi đã submit 
    setValue('')
  }

  return (
    <form onSubmit={handlerSubmit}>
    {/* hàm onSubmit được chạy khi ta nhấn nút submit hoặc nhấn nút enter trên bàn phím  */}
      <input type="text" value={value} onChange={handlerValueChange} />
      {/* khi gán giá trị cho value bằng state value nếu muốn thay đổi giá trị trong 
      input ta cần sử dụng hàm onChange để cập nhật lại giá trị cho state */}
    </form>
  );
}

export default TodoForm;

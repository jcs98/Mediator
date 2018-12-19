const DetailIcon = (type) => {

  let detailColor, detailIcon;

  switch (parseInt(type)) {
    case 0: detailIcon = "message"; detailColor = "blue"; break;
    case 1: detailIcon = "edit"; detailColor = "blue"; break;
    case 2: detailIcon = "check-circle-o"; detailColor = "green"; break;
    case 3: detailIcon = "clock-circle-o"; detailColor = "red"; break;
    case 4: detailIcon = "close-circle-o"; detailColor = "red"; break;
    default: detailIcon = "message"; detailColor = "blue"; break;
  }

  return (
  {color: detailColor, icon: detailIcon}
  );
}

export default DetailIcon;
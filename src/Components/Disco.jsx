function Disco({ age }) {
  return (
    age && (
      <h2
        className={`text-${
          age >= 18 ? "success" : age >= 17 ? "warning" : "danger"
        }`}
      >
        Yoshingiz {Math.floor(age)}da ekan. Kirishingiz{" "}
        {age < 18 && age >= 17
          ? "uchun chekkaroqda 1-2som berishingiz kerak, keyin kirishingiz"
          : ""}{" "}
        mumkin! {age < 17 ? " emas! (Ishdan ketgim kemayapti!)" : ""}
      </h2>
    )
  );
  // if (age >= 18) {
  //   return (
  //     <h2 className="text-success">
  //       Yoshingiz {Math.floor(age)}da ekan. Kirishingiz mumkin!
  //     </h2>
  //   );
  // } else if (age >= 17) {
  //   return (
  //     <h2 className="text-warning">
  //       Yoshingiz {Math.floor(age)}da ekan. Kirishingiz  mumkin!
  //     </h2>
  //   );
  // } else {
  //   return (
  //     <h2 className="text-danger">
  //       Yoshingiz {Math.floor(age)}da ekan. Kirishingiz mumkin
  //     </h2>
  //   );
  // }
}

export default Disco;

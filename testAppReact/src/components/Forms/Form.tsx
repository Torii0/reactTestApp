import { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {name: '', age: 0};

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    // nameRef.current to element struktury DOM
    // trzeba podkreslic ze nie moze byc nullem poniewaz nie bedzie mozna
    // później tego wyświetlic i zapisac poniewaz jest opcja ze element moze byc nullem
    //zeby dostac sie do wartosci elementu nalezy jeszcze dodac value jednak wtedy trzeba również przypisać referencji HTMLInputElemet 
    //useRef musi być początkowo nullem ponieważ struktura DOM tworzy sie po renderowaniu
    // i nie moze być wtedy inny początkowy obiet niż null lub referencja istniejacego juz elementu DOM
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary" type="submit">
        Button
      </button>
    </form>
  );
};

export default Form;

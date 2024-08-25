import { useForm } from "./use-form";

export const ReviewForm = () => {
    const { form, setName,  setText, setRate  } = useForm();
    const { name, text, rate } = form;

    return (
        <div>
        <div>
            <div>Name</div>
            <input type='text' value={name} onChange={setName} />
        </div>
        <div>
            <div>Text</div>
            <input type='text' value={text} onChange={setText} />
        </div>
        <div>
            <div>Rate</div>
            <input type='text' value={rate} onChange={setRate} />
        </div>
        </div>
  );
}

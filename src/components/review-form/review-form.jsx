import { useForm } from "./use-form";
import { ReviewCounter } from "../review-counter/review-counter";

export const ReviewForm = () => {
    const { form, setName,  setText, setRate, clear  } = useForm();
    const { name, text, rate } = form;

    return (
        <div>
            <div>
                <span>Name</span>
                <input type='text' value={name} onChange={setName} />
            </div>
            <div>
                <div>Text</div>
                <input type='text' value={text} onChange={setText} />
            </div>
            <div>
                <div>Rate</div>
                <ReviewCounter 
                    rating={rate}
                    onRateChange={setRate} />
            <div>
                <button onClick={clear}>Clear</button>
            </div>
            </div>
        </div>
  );
}

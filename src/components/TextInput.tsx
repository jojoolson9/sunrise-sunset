import questionSvg from "../images/question.svg";

// This component could easily become re-usable if we
// wanted to pass in the various labels as props instead
// of hardcoding them for this specific use case.

interface TextInputProps {
  handleChange: (textInput: string) => void;
}

const TextInput = (props: TextInputProps) => {
  return (
    <>
      <div className="mb-1 d-flex align-items-center">
        {/* htmlFor is so that screen readers know what this label applies to */}
        <label htmlFor="ip-address-input">IP Address</label>
        <a
          href="https://www.popularmechanics.com/technology/a32729384/how-to-find-ip-address/"
          target="_blank" // Open in a new tab, we don't want to disrupt a user's journey!
          rel="noopener noreferrer" // Mitigates security risks
          aria-label="What is an IP Address?"
          className="ms-1"
        >
          {/*
            alt text is empty here as we have the aria-label above to indicate what clicking this will do.
            In this case, the image is purely decoration, so we should assign it an empty alt text.
            */}
          <img src={questionSvg} alt="" role="link" />
        </a>
      </div>
      <input
        id="ip-address-input"
        className="form-control py-3"
        type="text"
        placeholder="Enter your IP Address"
        onChange={(e) => props.handleChange(e.target.value)}
      />
    </>
  );
};

export default TextInput;

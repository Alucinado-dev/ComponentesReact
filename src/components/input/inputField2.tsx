
/* npm i -D daisyui@latest */

const InputField = () => {
  return (
    <div className="flex flex-col bg-amber-300 p-7 gap-4 " >
      <input type="text" placeholder="Type here" className="input" />

      <input type="text" placeholder="Type here" className="input input-ghost" />


      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          </g>
        </svg>
        <input type="text" className="grow" placeholder="index.php" />
      </label>
      <label className="input">
        Path
        <input type="text" className="grow" placeholder="src/app/" />
        <span className="badge badge-neutral badge-xs">Optional</span>
      </label>



      <fieldset className="fieldset">
  <legend className="fieldset-legend">What is your name?</legend>
  <input type="text" className="input" placeholder="Type here" />
  <p className="label">Optional</p>
</fieldset>


<input type="text" placeholder="neutral" className="input input-neutral" />
<input type="text" placeholder="Primary" className="input input-primary" />
<input type="text" placeholder="Secondary" className="input input-secondary" />
<input type="text" placeholder="Accent" className="input input-accent" />

<input type="text" placeholder="Info" className="input input-info" />
<input type="text" placeholder="Success" className="input input-success" />
<input type="text" placeholder="Warning" className="input input-warning" />
<input type="text" placeholder="Error" className="input input-error" />




<input type="text" placeholder="Xsmall" className="input input-xs" />
<input type="text" placeholder="Small" className="input input-sm" />
<input type="text" placeholder="Medium" className="input input-md" />
<input type="text" placeholder="Large" className="input input-lg" />
<input type="text" placeholder="Xlarge" className="input input-xl" />


<input type="text" placeholder="You can't touch this" className="input" disabled />



<input type="text" className="input" placeholder="Which browser do you use" list="browsers" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Opera"></option>
  <option value="Edge"></option>
</datalist>




<input type="date" className="input" />

<input type="time" className="input" />


<input type="datetime-local" className="input" />

<label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>


<div className="join">
  <div>
    <label className="input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item">Join</button>
</div>



<label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
      ></path>
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
    </g>
  </svg>
  <input
    type="password"
    required
    placeholder="Password"
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
  />
</label>
<p className="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
</p>





<input
  type="number"
  className="input validator"
  required
  placeholder="Type a number between 1 to 10"
  min="1"
  max="10"
  title="Must be between be 1 to 10"
/>
<p className="validator-hint">Must be between be 1 to 10</p>




    </div>
  );
};

export default InputField;

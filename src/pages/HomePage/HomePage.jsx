import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Hello There!!{" "}
        <span role="img" aria-label="Greeting icon">
          🤗🖤
        </span>
      </PageTitle>
      <h3>
        I am @mercury_paws 🐾 and this is my first Redux App: a comprehensive
        contacts management application. Here are some it's features:
      </h3>

      <ul>
        <li>
          The application allows users to register and log in to manage their
          contacts securely.
        </li>
        <li>Once logged in, users can add new contacts with ease.</li>
        <li>
          The app provides the ability to amend existing contact information.
        </li>
        <li>
          Users can delete contacts they no longer need, ensuring their contact
          list stays up to date.
        </li>
      </ul>

      <p>
        Building this project has been an excellent learning experience,
        enhancing my skills in React and Redux. I hope you find the app useful
        and enjoy exploring its features as much as I enjoyed creating it.
      </p>
    </div>
  );
}

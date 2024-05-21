import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Task manager welcome page{" "}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>
        Welcome to my first React Redux project, a comprehensive contacts
        management application. <br />
        The application allows users to register and log in to manage their
        contacts securely. Once logged in, users can add new contacts with ease.
        The app provides the ability to amend existing contact information.
        Users can delete contacts they no longer need, ensuring their contact
        list stays up to date. A powerful search feature helps users find
        specific contacts quickly. The user interface is designed to be
        intuitive and user-friendly. <br />
        Building this project has been an excellent learning experience,
        enhancing my skills in React and Redux. I hope you find the app useful
        and enjoy exploring its features as much as I enjoyed creating it.
      </p>
    </div>
  );
}

import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <main
      style={{
        margin: '1.5rem auto',
        maxWidth: '80dvw',
      }}>
      <section>
        <h1>Mission Center</h1>
        <p>
          The Network is a robust and intuitive tool designed specifically for those who are enthusiasts in
          organization, looking to streamline their in-game operations and enhance the mission planning experience. This
          tool is an all-in-one solution that facilitates seamless coordination and management of missions, thereby
          creating a well-structured environment for in-game teamwork and strategy execution.
        </p>
      </section>
      <br />
      <br />
      <section className="missions">
        <h2>Missions Center</h2>
        <hr
          style={{
            margin: '1rem',
          }}
        />
        <h3>Mission Creation</h3>
        <p>
          Easily design intricate or simple missions with custom objectives, locations, and requirements. Add details
          such as backstory, targets, resources needed, and potential risks.
        </p>
        <h3>Group Formation & Role Assignment</h3>
        <p>
          Create different groups within your mission. Assign players to specific groups and designate roles, such as
          pilot, and Captain.
        </p>
        <h3>Financial Tracking</h3>
        <p>
          Keep tabs on the income generated from missions. FCFN lets you log all earnings and expenses related to a
          mission, so you have a clear picture of the profitability.
        </p>
        <h3>Payout Management</h3>
        <p>
          Schedule and track payouts to the members of your mission. The tool ensures that the revenue is allocated
          fairly according to the agreed terms and based on individual contributions.
        </p>
        <h3>Live Chat</h3>
        <p>
          Engage with your team in real-time through integrated live chat. Use this feature to plan strategies, address
          queries, coordinate in real-time, and foster camaraderie among your crew.
        </p>
        <h3>Security & Privacy</h3>
        <p>Your data is protected with high-end encryption and privacy measures.</p>
        <h3>User-Friendly Interface</h3>
        <p>
          FCFN features an intuitive and sleek design, making it easy for players of all levels to navigate and use the
          tool efficiently.
        </p>
      </section>
      <br />
      <br />
      <section className="events">
        <h2>Events Center</h2>
        <hr
          style={{
            margin: '1rem',
          }}
        />
        <h3>Events Creation</h3>
        <p>
          The addition of Events Management turns FCFN into an even more versatile tool, catering not only to mission
          planning but also enabling players to create, manage, and analyze in-game events effectively and efficiently.
          With this feature, FCFN empowers players to cultivate community, camaraderie, and engagement within Universe.
        </p>
        <h3>Event Creation</h3>
        <p>
          Beyond missions, FCFN allows you to organize in-game events such as tournaments, races, scavenger hunts, or
          social gatherings. Set event dates, times, locations, and objectives.
        </p>
        <h3>Event Leadership Assignment</h3>
        <p>
          Appoint event leaders who will be responsible for managing and overseeing the event. Similar to the group and
          role assignment in missions, event leaders can be assigned to manage various aspects such as security,
          logistics, or communications.
        </p>
        <h3>Participant Role Assignment</h3>
        <p>
          Assign roles to event participants, such as competitors, judges, or support staff. Define responsibilities and
          objectives for each role, ensuring the event runs smoothly and everyone is clear on their duties.
        </p>
        <h3>Live Chat for Events</h3>
        <p>
          Enable real-time communication between event participants, missions and organizers. This is crucial for
          coordinating activities, making announcements, and addressing queries during the event.
        </p>
      </section>
      <br />
      <br />
      <section className="orgs">
        <h2>Organizations Center</h2>
        <hr
          style={{
            margin: '1rem',
          }}
        />
        <p>
          With the Organization Management feature, FCFN evolves into a comprehensive tool that caters to all aspects of
          gameplay, from individual missions and events to managing complex player organizations. This feature empowers
          players to build, grow, and manage their organizations effectively, fostering a sense of community and
          achievement within the game.
        </p>
        <h3>Organization Creation</h3>
        <p>
          Set up an in-game organization within FCFN. Define the organization’s name, objectives, and other relevant
          details to establish its identity in Star Citizen.
        </p>
        <h3>Membership Applications & Management</h3>
        <p>
          Create a streamlined application process for new members looking to join your organization. Manage the
          applications, review applicant profiles, and accept or reject applications as necessary.
        </p>
        <h3>Calendar & Scheduling</h3>
        <p>
          Integrate a calendar within your organizations dashboard. The calendar showcases all the upcoming events,
          meetings, or other important dates, ensuring members are well-informed and can plan accordingly.
        </p>
        <h3>Member Profiles & Assignments</h3>
        <p>
          Create detailed profiles for each member of your organization, including their in-game skills, roles,
          experience, and achievements. Assign members to specific roles, missions, events, or other tasks within the
          organization.
        </p>
      </section>
    </main>
  );
};

export default Page;

import ListOfActivities from '../ListOfActivities';

const activities = {
    activityName: "Coding Challenge",
    date: "15-12-2021",
    startTime: "10:00",
    endTime: "13:00",
    numMaxGuests: 20
  };

  describe("", () => {
    it("accepts activity props", () => {
      const wrapper = mount(<ListOfActivities activities={activities} />);
      expect(wrapper.props().activities).toEqual(activities);
    });
    it("renders correctly with no error message", () => {
        const wrapper = mount();
        expect(wrapper.state("error")).toEqual(null);
      });
  });

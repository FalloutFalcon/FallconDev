import Link from "next/link";

export default function trackerPage() {
  return (
    <div>
      <h1>Slime Vr Trackers</h1>
      <p>Im making myself a set of slime vr full body tracking!</p>
      <p>This is my first project working closesly with eletronics!</p>
      <p>Found some useful links about how IMUs work!</p>
      <p>Random Standford class!</p>
      <Link href="https://web.stanford.edu/class/ee267/notes/ee267_notes_imu.pdf">
        https://web.stanford.edu/class/ee267/notes/ee267_notes_imu.pdf
      </Link>
      <p>Pretty useful guide</p>
      <Link href="http://www.starlino.com/imu_guide.html">
        http://www.starlino.com/imu_guide.html
      </Link>

      <p>
        The current plan is using the cheap IMU and add on an external
        magentometer. I need to do some research to make sure my room is
        suitable for magentometers cause they rely on not having a supoer
        magnectic enviroment.{" "}
      </p>
    </div>
  );
}

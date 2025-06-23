import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1>Welcome to My Profile</h1>
      <p>Hello, My name is Trung.</p>
      <p>Im from DaNang city.</p>
      <p>This is deployment using CD github action page.</p>
      <Image
        src="https://avatars.githubusercontent.com/u/83105598?v=4"
        alt="Profile"
        width={100}
        height={100}
      />
      ;
    </>
  );
}

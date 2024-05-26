export default function DesignTest() {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="">Design Test Page</h1>
        <h1>This is an H1 heading</h1>
        <h2>This is an H2 heading</h2>
        <h3>This is an H3 heading</h3>
        <h4>This is an H4 heading</h4>
        <h5>This is an H5 heading</h5>
        <h6>This is an H6 heading</h6>
        <p>
          This is a paragraph with a <a href="#">link</a> to test the link
          styles.
        </p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>

        <section>
          <h1>This is an H1 heading</h1>
          <h2>This is an H2 heading</h2>
          <h3>This is an H3 heading</h3>
          <h4>This is an H4 heading</h4>
          <p>
            This is a paragraph with a <a href="#">link</a> to test the link
            styles.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="">Font Sizes</h2>
          <div className="space-y-4">
            <p className="text-xs">This is xs text.</p>
            <p className="text-sm">This is sm text.</p>
            <p className="text-base">This is base text.</p>
            <p className="text-lg">This is lg text.</p>
            <p className="text-xl">This is xl text.</p>
            <p className="text-2xl">This is 2xl text.</p>
            <p className="text-3xl">This is 3xl text.</p>
            <p className="text-4xl">This is 4xl text.</p>
            <p className="text-5xl">This is 5xl text.</p>
            <p className="text-6xl">This is 6xl text.</p>
            <p className="text-7xl">This is 7xl text.</p>
            <p className="text-8xl">This is 8xl text.</p>
            <p className="text-9xl">This is 9xl text.</p>
          </div>
        </section>

        <section>
          <h2 className="text-7xl mb-8">Spacing</h2>
          <div className="space-y-4">
            <div className="bg-primary text-white p-1">Spacing 1</div>
            <div className="bg-primary text-white p-2">Spacing 2</div>
            <div className="bg-primary text-white p-3">Spacing 3</div>
            <div className="bg-primary text-white p-4">Spacing 4</div>
            <div className="bg-primary text-white p-5">Spacing 5</div>
            <div className="bg-primary text-white p-6">Spacing 6</div>
            <div className="bg-primary text-white p-7">Spacing 7</div>
            <div className="bg-primary text-white p-8">Spacing 8</div>
            <div className="bg-primary text-white p-9">Spacing 9</div>
            <div className="bg-primary text-white p-10">Spacing 10</div>
            <div className="bg-primary text-white p-11">Spacing 11</div>
            <div className="bg-primary text-white p-12">Spacing 12</div>
            <div className="bg-primary text-white p-14">Spacing 14</div>
            <div className="bg-primary text-white p-16">Spacing 16</div>
            <div className="bg-primary text-white p-20">Spacing 20</div>
            <div className="bg-primary text-white p-24">Spacing 24</div>
            <div className="bg-primary text-white p-28">Spacing 28</div>
            <div className="bg-primary text-white p-32">Spacing 32</div>
            <div className="bg-primary text-white p-36">Spacing 36</div>
            <div className="bg-primary text-white p-40">Spacing 40</div>
            <div className="bg-primary text-white p-44">Spacing 44</div>
            <div className="bg-primary text-white p-48">Spacing 48</div>
            <div className="bg-primary text-white p-52">Spacing 52</div>
            <div className="bg-primary text-white p-56">Spacing 56</div>
            <div className="bg-primary text-white p-60">Spacing 60</div>
            <div className="bg-primary text-white p-64">Spacing 64</div>
            <div className="bg-primary text-white p-72">Spacing 72</div>
            <div className="bg-primary text-white p-80">Spacing 80</div>
            <div className="bg-primary text-white p-96">Spacing 96</div>
          </div>
        </section>
      </div>
    </main>
  );
}

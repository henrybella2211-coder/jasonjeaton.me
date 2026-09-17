import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("refillable-pod-kits-that-feel-like-a-disposable")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        &quot;Pod kit&quot; covers a huge range of devices, from tiny button-free
        sticks to boxier kits with screens and adjustable wattage. If you&apos;re
        coming from a disposable and just want something that works the same way with
        less waste, you only need to pay attention to a small handful of specs. This
        is a guide to what those specs mean, not a ranked list of specific products,
        because the right kit genuinely depends on what you liked about your old
        device.
      </p>
      <p>
        For the background on why you&apos;re choosing a reusable kit at all, see our
        explainer on{" "}
        <Link href="/guides/disposable-vapes-banned-what-to-use-instead">
          the UK disposable vape ban and what to use instead
        </Link>
        .
      </p>

      <h2>What &quot;feels like a disposable&quot; actually means</h2>
      <p>
        In practice, it comes down to three things: size, how you activate it, and how
        much fiddling it needs. A kit that feels like a disposable is usually slim
        enough to hold in one hand, either draw-activated or has a single button, and
        uses pods rather than an open tank you have to build coils into. Beyond that,
        the differences between models are mostly about battery size and how the pod
        clicks or screws into place.
      </p>

      <h2>Pod capacity: why it&apos;s always around 2ml</h2>
      <p>
        You&apos;ll notice that almost every compact pod kit sold in the UK has a pod
        capacity of about 2ml. That&apos;s not a design coincidence, it&apos;s a legal
        limit. Under the Tobacco and Related Products Regulations, prefilled tanks,
        pods and cartridges containing nicotine e-liquid are capped at 2ml, which is
        also why disposables themselves were always around that size. Separately,
        bottles of nicotine-containing e-liquid you refill from are capped at 10ml. So
        whichever kit you choose, the pod size itself won&apos;t vary much, what
        changes is how many refills you get out of a bottle.
      </p>

      <h2>Coil resistance and why flavour varies between kits</h2>
      <p>
        Pods usually come with a printed resistance figure, shown in ohms, for example
        0.6&ohm; or 1.0&ohm;. Lower resistance coils (roughly under 1.0&ohm;) tend to
        produce warmer vapour and a looser, airier draw, closer to direct-to-lung (DTL)
        vaping. Higher resistance coils (1.0&ohm; and above) give a tighter draw closer
        to mouth-to-lung (MTL), which is what most disposables were tuned for and what
        feels most like a cigarette. If your old disposable felt tight to pull on,
        look for a kit with a higher resistance coil or an adjustable airflow ring you
        can close down.
      </p>

      <h2>Battery size and how it affects your day</h2>
      <p>
        Battery capacity is listed in mAh (milliamp hours). Small disposables were
        often only a few hundred mAh, enough for a device you&apos;d throw away in a
        few days anyway. A reusable kit you intend to keep needs more headroom, so most
        sensible options for a former disposable user sit somewhere between 400mAh and
        1000mAh. As a rough guide:
      </p>
      <ul>
        <li>Under 500mAh: light use, likely charging daily.</li>
        <li>500 to 800mAh: typical for most former disposable users, charging every day or two.</li>
        <li>800mAh and above: heavier use, or you&apos;d rather charge less often.</li>
      </ul>
      <p>
        Battery size is only half the story though, settings and habits make a real
        difference too. We cover both in{" "}
        <Link href="/guides/how-to-make-your-pod-kit-battery-last-all-day">
          our guide to making a pod kit battery last all day
        </Link>
        .
      </p>

      <h2>Draw-activated or button kits</h2>
      <p>
        Draw-activated kits, where you just inhale and the device fires automatically,
        are the closest match to a disposable and are usually the easiest
        recommendation for someone who found buttons off-putting. Single-button kits
        add one extra step (holding the button while you inhale) but often support
        slightly higher power output and clearer battery indicators, which some people
        prefer once they&apos;re used to it. Neither is objectively better, it&apos;s a
        matter of what you find easiest to use without thinking about it.
      </p>

      <h2>Running costs compared</h2>
      <p>
        A pod kit itself typically costs somewhere in the £10 to £20 range on the UK
        high street or online, depending on the brand and included pods. After that,
        your ongoing spend is e-liquid and occasional replacement pods or coils.
      </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Typical UK price</th>
            <th>How often</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pod kit (device)</td>
            <td>£10 to £20</td>
            <td>One-off, lasts a year or more with care</td>
          </tr>
          <tr>
            <td>Replacement pods or coils</td>
            <td>£3 to £8 for a pack</td>
            <td>Every one to three weeks, depending on use</td>
          </tr>
          <tr>
            <td>10ml nic salt e-liquid bottle</td>
            <td>£3 to £5</td>
            <td>Varies widely with how much you vape</td>
          </tr>
        </tbody>
      </table>
      <p>
        We&apos;ve set out a fuller worked example, including how this compares to
        what people typically spent on disposables, in{" "}
        <Link href="/guides/how-much-you-can-save-switching-from-disposables">
          our guide to how much switching can actually save you
        </Link>
        .
      </p>

      <h2>A few honest caveats</h2>
      <p>
        A refillable kit asks a little more of you than a disposable did. You&apos;ll
        need to remember to charge it, and refilling a pod without spilling takes a go
        or two to get comfortable with. Coils also wear out and affect flavour before
        they fail completely, so if a pod suddenly tastes burnt or flat, that&apos;s
        usually your cue to swap it rather than a fault with the device. None of this
        is difficult, but it is a small habit change from the pure disposability you
        had before.
      </p>
    </ArticleLayout>
  );
}

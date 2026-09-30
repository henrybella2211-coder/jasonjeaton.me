import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug(
  "lost-mary-bm6000-draw-activated-alternative-for-disposable-users"
)!;

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
        Lost Mary is a name most former disposable users will recognise from the shelf
        of single-use devices that disappeared when the UK&apos;s ban came in. The brand
        didn&apos;t disappear with them though, and the{" "}
        <a
          href="https://localsupplies.co.uk/collections/lost-mary-bm6000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lost Mary BM6000
        </a>{" "}
        is one of the rechargeable kits it&apos;s moved on to. It&apos;s worth a look
        specifically because of how little it asks you to change: no buttons, no
        settings, and a shape that&apos;s barely different from the disposable it&apos;s
        meant to replace.
      </p>

      <h2>Draw-activated, same as before</h2>
      <p>
        The BM6000 is draw-activated, which means there&apos;s nothing to press. You
        put it to your mouth, draw, and it fires automatically, exactly the way a
        disposable did. For anyone who found a button fiddly or just never got the hang
        of holding one down while inhaling, this is the detail that matters most. It
        also means there&apos;s no risk of accidentally leaving it &quot;on&quot; in a
        pocket, since there&apos;s no power switch to forget about in the first place.
      </p>

      <h2>What&apos;s actually reusable here</h2>
      <p>
        The part that makes this a genuinely different device from a disposable, rather
        than just a disposable in a different shape, is that the battery and body are
        built to be kept. Only the pod gets replaced once it&apos;s empty or starts
        tasting off. That single change, rechargeable body plus a replaceable pod
        instead of a device you bin whole, is also what kept devices like this legal to
        sell after the UK&apos;s single-use vape ban took effect on 1 June 2025.
        Disposables were banned specifically because they were designed to be thrown
        away after one use; a kit like the BM6000 isn&apos;t.
      </p>
      <p>
        We go into the reasoning behind that ban, and what else counts as a compliant
        replacement, in{" "}
        <Link href="/guides/disposable-vapes-banned-what-to-use-instead">
          our explainer on the UK disposable vape ban
        </Link>
        , if you want the fuller picture.
      </p>

      <h2>Charging: the one new habit</h2>
      <p>
        The BM6000 charges over USB-C, with a full charge taking roughly 45 to 60
        minutes according to the retailer listing. Note that a cable typically
        isn&apos;t included in the box, so it&apos;s worth having a spare USB-C lead to
        hand rather than assuming one comes with the kit. This is really the only habit
        change from a disposable: instead of a device that&apos;s dead once the battery
        runs out, you plug it in and it&apos;s ready again. If that&apos;s unfamiliar
        territory, our guide to{" "}
        <Link href="/guides/how-to-make-your-pod-kit-battery-last-all-day">
          making a pod kit battery last all day
        </Link>{" "}
        covers the small habits that stop a battery dying on you halfway through the
        day.
      </p>

      <h2>The pod, the coil, and what it costs to run</h2>
      <p>
        The mesh coil is built into the pod itself rather than sold as a separate part,
        so when a pod is finished you replace the whole thing rather than swapping a
        coil inside an open tank. Lost Mary states the pod is rated for up to 6,000
        puffs, and it&apos;s worth being clear about what that figure is: a manufacturer
        estimate for a single pod, not an independently tested number, and not
        comparable to the total puff count printed on a disposable&apos;s packaging,
        which usually refers to the whole device rather than one refill.
      </p>
      <p>
        On price, replacement pods typically run around £4.99 each, with the starter
        kit itself around £7.49, though exact pricing varies a little between UK
        retailers and can change over time. Nicotine strength sits at 20mg/ml across
        the range, which is the UK&apos;s regulatory cap and the strength most
        disposable users were already used to. If you&apos;re not sure that strength is
        still right for you now you&apos;re on a refillable kit, it&apos;s worth reading
        our guide on{" "}
        <Link href="/guides/matching-your-old-disposables-nicotine-hit-with-the-right-nic-salt-strength">
          matching your old disposable&apos;s nicotine hit to the right nic salt
          strength
        </Link>
        .
      </p>

      <h2>Flavours</h2>
      <p>
        The range runs to somewhere around 48 flavours, split roughly across three
        styles: ice and menthol options such as Banana Ice, Blackberry Ice, Cherry Ice,
        Watermelon Ice, Fresh Mint and Miami Mint; fruit flavours including Blueberry,
        Blue Razz Cherry, Triple Berry, Double Apple, Grape and Triple Mango; and a
        smaller set of cola and soft-drink styles like Cola, Cherry Cola and Pink
        Lemonade. Exact availability shifts between retailers and over time, so treat
        that as a sense of the range rather than a fixed list.
      </p>

      <h2>Who this actually suits</h2>
      <p>
        Draw-activated, replaceable-pod kits like this one sit at the simple end of the
        reusable market, closer to a disposable than most refillable open-pod systems
        are. If what you liked about your old device was genuinely not having to think
        about it, pick a flavour, draw, done, the BM6000 is a close match. If you&apos;d
        rather fine-tune airflow, mix your own e-liquid, or top up an existing pod
        instead of replacing it outright, an open refillable kit will probably suit you
        better even though it asks a little more of you upfront. Our wider guide to{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          refillable pod kits that feel like a disposable
        </Link>{" "}
        covers that trade-off in more detail if you&apos;re still deciding between the
        two approaches.
      </p>

      <h2>A few honest caveats</h2>
      <p>
        This is sold for adults aged 18 and over only, like every nicotine vaping
        product in the UK, and we haven&apos;t tested the BM6000 ourselves, so nothing
        here is a first-hand review or a health claim. Sealed pods mean you can&apos;t
        top one up when it&apos;s nearly empty, you replace it outright, which over
        time works out a bit more expensive per millilitre than refilling an open tank.
        And because the coil lives inside the pod, you lose the option to fine-tune
        resistance or airflow the way you could on a more adjustable kit. None of that
        makes it a poor choice, it&apos;s just worth knowing what &quot;feels like a
        disposable&quot; does and doesn&apos;t include before you buy one.
      </p>
    </ArticleLayout>
  );
}

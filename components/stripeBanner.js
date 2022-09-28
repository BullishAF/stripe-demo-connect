export default function StripeBanner(props) {
  return (
    <div className="annotation">
      <p>
        <img src="/stripe.svg" width="60" />
        ©Snapshops partners with{' '}
        <a className="stripe" href="https://stripe.com">
        ©Stripe
        </a>{' '}
        to on-board host locations with{' '}
        <a href="https://stripe.com/connect" target="_blank">
          stripe connect
        </a>{' '}
        for fast and secure payouts.{' '}
      </p>

      <style jsx>
        {`
          .annotation {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            min-height: 40px;

            background: #fff;
            text-align: center;
            font-size: 16px;
          }

          .annotation img,
          .annotation a,
          .annotation p {
            display: inline-block;
            margin: 0;
          }

          .annotation img {
            margin-right: 10px;
          }

          .annotation a:link,
          .annotation a:visited {
            color: #4633FF;
          }

          @media (min-width: 820px) {
            .annotation {
              max-width: 800px;
              margin-left: auto;
              margin-right: auto;
              bottom: 30px;
              border-radius: 50px;
              padding: 10px;
            }

            h1 {
              font-size: 60px;
            }
          }
        `}
      </style>
    </div>
  );
}

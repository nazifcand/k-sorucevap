import { useParams } from 'react-router-dom';
import { IEvent, IQuestion } from '../interfaces';
import { useEffect, useState } from 'react';
import { fetchEvent } from '../services/kommunity.service';
import { AskQuestionModal, Question } from '../components';

const initialEvent = {
  id: '',
  community_id: '',
  venue: {
    id: '',
    name: '',
    address: '',
    lat: null,
    lng: null,
  },
  name: '',
  slug: '',
  detail: '',
  event_where: '',
  hide_location: null,
  start_date: {
    date: '',
    timezone: {
      timezone_type: 0,
      timezone: '',
    },
  },
  end_date: {
    date: '',
    timezone: {
      timezone_type: 0,
      timezone: '',
    },
  },
  start_date_humanity: {
    date: '',
    timezone: {
      timezone_type: 0,
      timezone: '',
    },
  },
  rsvp_limit: null,
  guest_rsvp_limit: null,
  is_featured: 0,
  status: 0,
  rsvp_status: false,
  photo_count: 0,
  highlight_photo: '',
  is_organizer: false,
  user_rsvp_status: false,
  user_joined_rsvp: false,
  user_is_waitlisted: false,
  user_is_verified_join_status: false,
  users_count: 0,
  community: {
    id: '',
    name: '',
    short_description: '',
    description: '',
    slug: '',
    headline: '',
    photo: '',
    profile_photo: '',
    colors: '',
    banner: '',
    banner_image_name: '',
    analytics: null,
    social_networks: {
      twitter: '',
      website: '',
      telegram: '',
      instagram: '',
    },
    members_count: 0,
    waitings_count: 0,
    events_count: 0,
    past_events_count: 0,
    isMember: false,
    isAdmin: false,
    isWaiting: false,
    is_owner: false,
    allowNotifications: false,
    who: '',
    created_at: '',
    updated_at: '',
    visibility: 0,
    can_user_see_community: false,
    has_pro: false,
    joining_type: {
      free: false,
      paid: false,
    },
    is_online: false,
    city: {
      id: 0,
      name: '',
      slug: '',
      country: {
        iso2: '',
      },
      timezone: '',
    },
    country: {
      id: 0,
      name: '',
    },
    leaders: [],
    members: [],
  },
  latest_users: [],
  users: [],
  key: null,
  calendar_links: {
    google: '',
    ics: '',
  },
  created_at: '',
  updated_at: '',
  attendance_type: 0,
  is_online: false,
  is_approved_attendance: false,
  language: '',
  who_can_see: 0,
  timezone: '',
  has_started: false,
  has_ended: false,
  recurring_event_id: 0,
  is_canceled: false,
};

const QUESTIONS: IQuestion[] = [
  {
    question: 'Su soğuk ortamda da kaynar mı?',
    answer:
      'Soğuk bir ortamda su kaynayamaz eğer ki doğal yollar ile kaynamasından bahsediyorsak. Suyun kaynaması için atmosfer basıncında ve deniz seviyesindeyken 100 derece sıcaklık gereklidir.[1] Yani örneğin kutupta da deniz seviyesinde 100 derecede bir ateşte su kaynamaktadır, ekvatorda da. Dış mekanın sıcaklığı bir önem arz etmez.',
    like: 73,
    dislike: -9,
    time: '17 dakika önce',
  },
  {
    question:
      'İnsan neden yalnız kaldığında ya da tenha bir yerdeyken izleniyor hissine kapılır?',
    answer:
      'Mesela sadece yalnızken ya da tenha bir yerdeyken olmuyor bu. Kalabalık bir yerdeyken bile izleniyor hissine kapılıyor insan. Mesela birisi bizi izliyor olsun, hatta o kişiyi de bulduk diyelim kalabalığın arasında. Beyin hemen nasıl anlıyor ve bizi uyarıyor? Ayrıca kalabalığın içinde nasıl şıp diye buluyoruz bizi izleyeni?',
    like: 73,
    dislike: -9,
    time: '17 dakika önce',
  },
  {
    question:
      '12 saat uyuyunca tüm gün yorgun oluyorum, 8 saatlik uyku ile daha dinç kalkıyorum. Bunun sebebi ne olabilir?',
    answer:
      'Selam , öncelikle bunun temel nedeni hafif-derin uyku ilişkisidir, eğer derin bir uykunun ortasında herhangi bir sebepten uyanırsan yorgun hissedersin (kaç saat uyursan uyu) vücudumuzun yapısı böyledir ancak hafif bir uykunun sonunda uyanırsan dinç hissedersin çünkü beynimiz hafif uykuyla gerekli uyku döngüsünü tamamlar. Umarım yardımcı olabilmişimdir...',
    like: 73,
    dislike: -9,
    time: '17 dakika önce',
  },
  {
    question: 'Işık hızından daha hızlı iletişim kurmak mümkün mü?',
    answer:
      'Dün uyurken bu konuda bir düşünce deneyi geldi aklıma. Yörüngeleri çakışık iki gezegen arasında esnemeyen ideal bir çubuk inşa etsek ve bu çubuğu hareket ettirerek iletişim kursak (örneğin 1 metre ileri hareket ettirip geri çekmek a harfini temsil etse) bu iletişimin bu şekilde gerçekleşmesi ideal şartlarda mümkün olur muydu?',
    like: 73,
    dislike: -9,
    time: '17 dakika önce',
  },
  {
    question: 'Bir Göktaşı küresel ısınmayı engelleyebilir mi?',
    answer:
      '66 milyon yıl önce Dünyaya çarpan bir göktaşı yerden çok fazla toz kaldırarak bir buzul çağına sebep olmuştu yine aynı şekilde dünyaya bir göktaşı çarpsa ve bir buzul çağı başlatsa küresel ısınma engellene bilir mi ?',
    like: 73,
    dislike: -9,
    time: '17 dakika önce',
  },
  {
    question: 'Neden farklı yükseklikde farklı görüş açısı olur?',
    answer:
      'Yarıçap öncekinin 2 katı olursa görüş alanı 4 kat artar.πr.r ile her katta görünen alan önceki katın görebileceği alanın 4 mislidir.yerden binaya bakınca da aynı şey geçerlidir fakat yukarda havadan başka bir şey olmadığı için yani yerden havaya dusemeyecegimiz için korkmayız.',
    like: 73,
    dislike: -9,
    time: '43 saniye önce',
  },
];

const EventRoute = () => {
  const { communitySlug = '', eventSlug = '' } = useParams<{
    communitySlug: string;
    eventSlug: string;
  }>();

  const [showAskModal, setShowAskModal] = useState<boolean>(false);

  const [isFetchingEvent, setIsFetchingEvent] = useState<boolean>(false);
  const [event, setEvent] = useState<IEvent>(initialEvent);

  const [isFetchingQuestions, setIsFetchingQuestions] =
    useState<boolean>(false);
  const [questions, setQuestions] = useState<IQuestion[]>(QUESTIONS);

  // fetch event
  useEffect(() => {
    (async () => {
      setIsFetchingEvent(true);
      const [err, response] = await fetchEvent({
        communitySlug,
        eventSlug,
      });
      setIsFetchingEvent(false);

      if (err) {
        console.log(err.response.data);
        return;
      }

      setEvent(response.data);
    })();
  }, [communitySlug, eventSlug]);

  return (
    <>
      {!isFetchingEvent && (
        <div className="container mx-auto flex gap-4 items-start">
          <div className="bg-gray-100 rounded-lg flex-[2] flex flex-col gap-4 p-4 box-border">
            <img
              src={event.highlight_photo}
              alt={event.name}
              className="w-full aspect-video mb-2 rounded-lg"
            />

            <h2 className="text-3xl font-bold">{event.name}</h2>

            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-700 gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>{event.venue.name}</span>
              </div>

              <div className="flex items-center text-gray-700 gap-2">
                <i className="far fa-calendar"></i>
                <span>{event.start_date_humanity.date}</span>
              </div>

              <div className="flex items-center text-gray-700 gap-2">
                <i className="fas fa-users"></i>
                <span>{event.users_count} Katılım</span>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: event.detail }}></div>
          </div>

          <div className="bg-gray-100 rounded-lg flex-[3] p-4 box-border flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="text-2xl font-bold">Sorular (435)</h3>
              <button
                className="bg-yellow-500 font-semibold uppercase text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600"
                onClick={() => setShowAskModal(true)}
              >
                Soru Sor
              </button>
            </div>

            {QUESTIONS.map((question, index) => (
              <Question key={index} question={question} />
            ))}
          </div>
        </div>
      )}

      <AskQuestionModal
        open={showAskModal}
        onClose={() => setShowAskModal(false)}
      />
    </>
  );
};

export default EventRoute;

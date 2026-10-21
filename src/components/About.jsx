import {
  Code2,
  Languages,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

const aboutCopy = {
  en: {
    label: 'ABOUT ME',
    headline: 'Driven by Code, Crafted with Precision',
    bio:
      'I hold a Bachelor’s degree in Computer Science from Kasetsart University, Kamphaeng Saen Campus, and build full-stack web applications and automation systems. I enjoy taking ideas from a clean, maintainable foundation all the way to production.',
    education: 'B.Sc. Computer Science · Kasetsart University',
    role: 'Full-Stack Web · Automation',
    statusLabel: 'CURRENT STATUS',
    status: 'Open for Immediate Opportunities',
    locationLabel: 'BASED IN',
    location: 'Bang Samak, Bang Pakong, Chachoengsao 24180',
    languagesLabel: 'COMMUNICATION',
    languages: 'Thai & English',
    languagesDetail: 'Professional proficiency',
  },
  th: {
    label: 'เกี่ยวกับผม',
    headline: 'ขับเคลื่อนด้วยโค้ด สร้างสรรค์ด้วยความใส่ใจ',
    bio:
      'ผมสำเร็จการศึกษาปริญญาตรีสาขาวิทยาการคอมพิวเตอร์จากมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน และมีประสบการณ์พัฒนาเว็บแอปพลิเคชันแบบ Full Stack รวมถึงระบบอัตโนมัติ ผมใส่ใจการสร้างระบบที่สะอาด ดูแลต่อได้ง่าย ตั้งแต่เริ่มต้นจนพร้อมใช้งานจริง',
    education: 'วิทยาการคอมพิวเตอร์ · มหาวิทยาลัยเกษตรศาสตร์',
    role: 'Full Stack · เว็บและระบบอัตโนมัติ',
    statusLabel: 'สถานะปัจจุบัน',
    status: 'พร้อมเริ่มงานทันที',
    locationLabel: 'ที่อยู่',
    location: 'บางสมัคร, บางปะกง, ฉะเชิงเทรา 24180',
    languagesLabel: 'การสื่อสาร',
    languages: 'ไทยและอังกฤษ',
    languagesDetail: 'ใช้งานได้ในระดับมืออาชีพ',
  },
};

function About() {
  const { language } = useLanguage();
  const copy = language === 'th' ? aboutCopy.th : aboutCopy.en;

  return (
    <section className="section about-section" id="about">
      <div className="content-width">
        <header className="about-heading">
          <p className="about-label">
            <Sparkles aria-hidden="true" size={15} />
            {copy.label}
            <span aria-hidden="true">/</span>
            {language === 'th' ? 'ABOUT ME' : 'เกี่ยวกับผม'}
          </p>
          <h2 className={`about-headline about-headline-${language}`}>{copy.headline}</h2>
        </header>

        <div className="about-bento-grid grid gap-4">
          <article className="about-bento-card about-bio-card">
            <div className="about-card-topline">
              <Code2 aria-hidden="true" className="about-card-watermark" size={34} />
            </div>
            <p className="about-bio-text">{copy.bio}</p>
            <div className="about-bio-meta">
              <span>{copy.education}</span>
              <span>{copy.role}</span>
            </div>
            <span aria-hidden="true" className="about-card-orb" />
          </article>

          <article className="about-bento-card about-portrait-card">
            <img
              alt={language === 'th' ? 'รูปโปรไฟล์' : 'Profile portrait'}
              className="about-portrait-image"
              src="/student-profile.jpg"
            />
          </article>

          <article className="about-bento-card about-status-card">
            <span className="about-card-index">{copy.statusLabel}</span>
            <div className="about-status-content">
              <span aria-hidden="true" className="about-status-indicator" />
              <h3>{copy.status}</h3>
            </div>
            <span className="about-status-caption">
              {language === 'th' ? 'พร้อมร่วมงานและเริ่มต้นได้ทันที' : 'Available to start and make an impact'}
            </span>
          </article>

          <article className="about-bento-card about-location-card">
            <span className="about-card-index">{copy.locationLabel}</span>
            <div className="about-small-card-content">
              <span className="about-icon-shell"><MapPin aria-hidden="true" size={19} /></span>
              <h3>{copy.location}</h3>
            </div>
          </article>

          <article className="about-bento-card about-languages-card">
            <span className="about-card-index">{copy.languagesLabel}</span>
            <div className="about-small-card-content">
              <span className="about-icon-shell"><Languages aria-hidden="true" size={19} /></span>
              <div>
                <h3>{copy.languages}</h3>
                <p>{copy.languagesDetail}</p>
              </div>
            </div>
            <div aria-hidden="true" className="about-language-bars"><i /><i /></div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;

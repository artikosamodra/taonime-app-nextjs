const AnimeInfo = ({ subInfo, fetchInfo }) => {
  return (
    <section>
      <div>
        <table>
          <tbody>
            <tr className="text-left">
              <th className="w-32">{subInfo}</th>
              <td className="w-100 text-">: {fetchInfo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AnimeInfo;
